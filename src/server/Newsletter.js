import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const cors = require('cors');

const app = express();
const port = 8001;

// Permitir solicitudes CORS desde http://127.0.0.1:5173
app.use(cors({
  origin: 'http://127.0.0.1:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: 'CORS error' });
  } else {
    next();
  }
});

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const filePath = path.join(__dirname, 'emails.txt');
const filePath = ('/Users/ferrangaldon10/Documents/Universidad/TFG/tfg-project/src/server/emails.txt');

//const filePath = path.join(new URL(import.meta.url).pathname, 'emails.txt');

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email.includes('@')) {
    res.status(400).json({ message: 'Invalid email' });
  } else {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Error subscribing' });
      } else {
        const emails = data.split('\n');
        if (emails.includes(email)) {
          res.status(409).json({ message: 'Email already exists' });
        } else {
          fs.appendFile(filePath, `${email}\n`, (err) => {
            if (err) {
              console.log(err);
              res.status(500).json({ message: 'Error subscribing' });
            } else {
              res.json({ message: 'Subscribed successfully' });
            }
          });
        }
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
