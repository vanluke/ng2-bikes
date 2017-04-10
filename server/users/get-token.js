export default function(socket) {
  console.log('get-token');
  console.log('token socket', socket.data);
  socket.socket.emit('auth', { token: 'abc' });
}