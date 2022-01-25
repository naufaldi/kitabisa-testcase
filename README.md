# Project Kitabisa Frontend

Project for Kitabisa Frontend build with Vite, ReactJS , TailwindCSS and Typescript. Config with Prettier and Eslint.

## Demo

[Demo Website](kita-bisa.vercel.app)

## Run Locally

Clone the project

```bash
  git clone https://github.com/naufaldi/kitabisa-testcase
```

Go to the project directory

```bash
  cd kitabisa-testcase
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file for CORS Problem.
go to [CORS Anywhere](https://cors-anywhere.herokuapp.com/)

add `https://cors-anywhere.herokuapp.com/` to .env

## Folder Structure
.
├── dist                    # Compiled files 
├── src                     # Source files 
│   └── components          # all of component files
│       ├── assets          # component related to icon / svg
│       ├── common          # component related to common like button / alert
│       ├── homepage        # component base on usage in pages 
│       ├── layout          # component base on layout like header, and footer,
│   |── lib                 # utils/helpers code
│   ├── pages               # pages files
│   ├── recoil              # Global State
│   ├── styles              # Style file
│   └─── types               # Type data 
└── README.md
