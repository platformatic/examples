CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  author_user_id VARCHAR(255),
  author_name VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
