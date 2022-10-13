CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(50) NOT NULL, 
    email VARCHAR(50) UNIQUE NOT NULL, 
    "passwordHash" TEXT UNIQUE NOT NULL,
    "createdAt" TEXT NOT NULL
);

CREATE TABLE sessions (
    id SERIAL PRIMARY KEY,
    "userId" INTEGER REFERENCES "users"("id"),
    token VARCHAR(100) NOT NULL,
    "createdAt" VARCHAR(20) NOT NULL
);

CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    "userId" INTEGER REFERENCES "users"("id"),
    url TEXT UNIQUE NOT NULL,
    "shortUrl" TEXT UNIQUE NOT NULL,
    visits INTEGER DEFAULT 0,
    "createdAt" VARCHAR(20) NOT NULL
);