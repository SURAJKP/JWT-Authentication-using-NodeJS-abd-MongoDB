import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
let app = express();

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-Middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import users from './routes/users';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PRANO', { useMongoClient: true });


// app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(6565,()=> console.log("Running on localhost:6565"));
