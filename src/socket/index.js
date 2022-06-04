const socketIo = io => {
  let userCount = 0;
  io.on("connection", socket => {
    userCount++;
    console.log("id client connect:", socket.id);
    console.log("client connect:", userCount);

    socket.on("disconnect", () => {
      console.log("client disconect");
      userCount--;
    });
  });
};

module.exports = socketIo;
