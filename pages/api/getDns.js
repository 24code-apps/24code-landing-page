import dns from "dns";

export default function handler(req, res) {
  if (req.method === "POST") {
    if (!req?.body?.address)
      return res.status(400).json({
        message: "body required",
      });
    dns.lookup(req?.body?.address, { all: true }, (err, address) => {
      if (err) {
        return res.status(400).json({
          message: "something went wrong",
        });
      }
      return res.json(address);
    });
  } else return res.status(404).send("Not found");
}
