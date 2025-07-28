CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "refreshToken" TEXT,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "isActive" BOOLEAN DEFAULT TRUE
);

create table merchant(
  id serial primary key,
  name text not null,
  "isActive" boolean default true,
  "createdAt" timestamp default current_timestamp,
  "updatedAt" timestamp default current_timestamp
)
alter table users add column "merchantId" integer 
add constraint fk_merchant_id
references merchant(id) 
on delete cascade;






create table plan(
  id serial primary key,
  "merchantId" int not null,-- the merchant offer plan
  constraint fk_merchant_id foreign key("merchantId")
references merchant(id) 
on delete cascade,
name varchar(50) not null,
 price decimal(10,2) not null,
  "createdAt" timestamp default current_timestamp,
  "updatedAt" timestamp default current_timestamp
)
 -- subscription record 
create table subscription(
  id serial primary key,
  "planId" int not null,
  constraint fk_plan_id foreign key ("planId")
references plan(id)-- wich plan  to subscribe
on delete cascade,
  "subscriberType" varchar(10) check ("subscriberType" in ('user', 'merchant')) not null,-- who is subscribing 
  "subscriberId" integer not null,
  "createdAt" timestamp default current_timestamp,
  "updatedAt" timestamp default current_timestamp,
  "expiresAt" timestamp not null,
  "cancelledAt" timestamp)

  ALTER TABLE subscription
ALTER COLUMN "expiresAt"
SET DEFAULT NOW() + INTERVAL '1 hour';
