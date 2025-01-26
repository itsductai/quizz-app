import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography } from '@mui/material';
import Center from './Center';
import useForm from '../hooks/useForm';
import { createAPIEndpoint, END_POINT } from '../api/index';
import { Route, useNavigate } from 'react-router-dom';
import useStateContext from '../hooks/useStateContext';

// Hàm để khởi tạo giá trị mặc định cho form
const getFreshModel = () => ({
  name: '',
  email: ''
});

export default function Login() {
  const {context,setContext} = useStateContext();  // Lấy context và setContext từ stateContext (rỗng khi khởi tạptạp)
  const navigate = useNavigate(); 
  // Gọi hook useForm bên trong component Login
  const {
    values,           // Các giá trị của form
    setValues,        // Hàm để cập nhật giá trị của form
    errors,           // Lỗi xác thực của form
    setErrors,        // Hàm để cập nhật lỗi
    handleInputChange // Hàm để xử lý thay đổi giá trị trường nhập
  } = useForm(getFreshModel);

  
  // Hàm xử lý khi form được submit
  const login = (e) => {
    e.preventDefault(); // Ngăn không cho form reload trang khi submit
    if (validate()) {   // Kiểm tra xác thực thông tin form
      createAPIEndpoint(END_POINT.participant) 
      .post(values) // gửi JSON cho API
      .then(res => 
        { 
          console.log(res)  
          setContext({pid : res.data.pid}) // Lưu thông tin người dùng vào Context
          console.log(context)
          //navigate('/quiz'); // Chuyển hướng tới trang Quiz
        }
      )
      .catch(err => console.log(err))
    }
  };

  // Hàm xác thực thông tin trong form
  const validate = () => {
    let temp = {}; // Tạo đối tượng tạm thời lưu trữ lỗi

    // Kiểm tra email có hợp lệ không
    temp.email = (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/).test(values.email)
      ? ""   // Nếu email hợp lệ thì không có lỗi
      : "Email không hợp lệ!";  // Nếu email không hợp lệ thì thông báo lỗi

    // Kiểm tra tên có bị bỏ trống không
    temp.name = values.name !== "" 
      ? ""   // Nếu tên không trống thì không có lỗi
      : "Name không được bỏ trống."; // Nếu tên trống thì thông báo lỗi
    
    setErrors(temp); // Cập nhật lỗi vào state errors
    return Object.values(temp).every(x => x === ""); // Kiểm tra xem tất cả lỗi có phải là chuỗi rỗng không (tức là không có lỗi)
  };

  return (
    <Center /* Component Center để căn giữa nội dung */>  <p>{context.pid}</p>  
      <Card>  
        <CardContent sx={{ textAlign: 'center' }}> 
          <Typography variant='h3' sx={{ my: 3 }}>Quiz App</Typography> 
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '90%' } }} 
            autoComplete="off"   /* Tắt tự động hoàn thành form */
            onSubmit={login}      /* Gọi hàm login khi form được submit */
          >
            <TextField
              id="outlined-email"
              label="Email"
              placeholder="Email"
              variant='outlined'  
              name='email'          
              value={values.email}  /* Giá trị của trường input email */
              onChange={handleInputChange}   /* Xử lý sự kiện thay đổi giá trị trong input */
              error={!!errors.email}         /* Nếu có lỗi, hiển thị thông báo lỗi */
              helperText={errors.email}      /* Hiển thị thông báo lỗi */
            />
            <TextField
              id="outlined-name"
              label="Name"
              placeholder="Name"
              variant='outlined'  
              name='name'          
              value={values.name}  /* Giá trị của trường input name */
              onChange={handleInputChange}   /* Xử lý sự kiện thay đổi giá trị trong input */
              error={!!errors.name}         /* Nếu có lỗi, hiển thị thông báo lỗi */
              helperText={errors.name}      /* Hiển thị thông báo lỗi */
            />
            <Button
              type='submit'
              variant="contained"
              sx={{ width: '90%' }}   
            >
              Start
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}
