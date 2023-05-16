export default (req, res) => {
  const ip = req.socket.remoteAddress;
  res.status(200).json({ ip });
};
