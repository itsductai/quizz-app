import React, { useEffect, useState } from 'react'; 
import useStateContext from '../hooks/useStateContext';
import { createAPIEndpoint, END_POINT } from '../api';
import { Card, CardContent, Typography } from '@mui/material';

export default function Quiz() {
  // Khai báo state `qns` để lưu danh sách câu hỏi, mặc định là mảng rỗng
  const [qns, setQns] = useState([]);
  const [qnsIndex, setqnsIndex] = useState(0)

  // useEffect chạy một lần sau khi component được render
  useEffect(() => {
      // Gọi API lấy danh sách câu hỏi
      createAPIEndpoint(END_POINT.questions)
          .fetch() // Gọi phương thức fetch() để lấy dữ liệu
          .then(res => {
              setQns(res.data); // Cập nhật state `qns` với dữ liệu từ API
              console.log(res.data); // In dữ liệu ra console để kiểm tra
          })
          .catch(err => {
              console.log(err); // Bắt lỗi nếu có lỗi xảy ra
          });
  }, []); // Mảng rỗng nghĩa là useEffect chỉ chạy một lần khi component mount

  return (
    qns.length !== 0
    ? <Card>
      <CardContent>
        <Typography variant = 'h6'>
          {qns[qnsIndex].quText}
        </Typography>
      </CardContent>
    </Card>
    :null
  )
}