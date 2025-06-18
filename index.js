const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 


const batteryRoutes = require('./routes/batteryRoutes');
// const tireRoutes = require('./routes/tireRoutes');
// const oilFilterRoutes = require('./routes/oilFilterRoutes');

app.use('/batteries', batteryRoutes);
// app.use('/tires', tireRoutes);
// app.use('/oilfilters', oilFilterRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
