
create database feastDB;

use feastDB;

create table feasts (
	id int not null auto_increment,
    primary key (id),
	feast_name varchar(255) not null,
    devoured boolean not null
)

drop feastDB;