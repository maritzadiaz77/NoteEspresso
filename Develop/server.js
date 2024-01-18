const express = require('express');
const htmlRoues = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const fs = require('fs');
const PORT = 3001;//This is the port that we are using

app.use(express.static('public'));

app.use('/api',apiRoutes);
app.use("/", htmlRoues);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
