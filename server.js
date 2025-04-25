// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối đến MongoDB
const mongoURI = 'mongodb://localhost:27017/bcgame'; // Thay đổi URL kết nối nếu cần
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log('Kết nối MongoDB thành công'))
.catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Định nghĩa một schema và model Mongoose (ví dụ)
const UserSchema = new mongoose.Schema({
  username: String,
  email: String
});

const User = mongoose.model('User', UserSchema);

// Tạo một route cơ bản
app.get('/', (req, res) => {
  res.send('Chào mừng đến với bc.game!');
});

// Tạo một route để thêm người dùng mới
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Lấy tất cả người dùng
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Bắt đầu máy chủ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});
