-- users テーブルを作成
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  password TEXT
);

-- users テーブルにインデックスを追加 (任意ですが、検索の効率向上のため)
CREATE INDEX idx_users_name ON users(name);

-- users テーブルにデータを挿入 (サンプルデータ)
INSERT INTO users (name, email, password) VALUES
('John Doe', 'john@example.com', '$2a$12$SaltValueSaltValueSaltValueSaltV'),
('Jane Doe', 'jane@example.com', '$2a$12$SaltValueSaltValueSaltValueSaltV');

-- email カラムにユニーク制約を追加
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);
