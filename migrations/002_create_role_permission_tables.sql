


create table roles (
    id serial primary key ,
    name varchar(100) UNIQUE not null
)


create table permissions (
    id serial primary key ,
    name varchar (100) UNIQUE not null
)

create table role_permissions(
    "roleId" int references  roles (id) on delete cascade,
    "permissionId" int references permissions(id) on delete cascade ,

    primary key ("roleId","permissionId") -- composite key ensure each combination is unique (no duplicates)
)

create table user_role(
    "userId" int references users(id ) on delete cascade ,
     "roleId" int references roles(id ) on delete cascade ,
     primary key ("userId","roleId") 
)

