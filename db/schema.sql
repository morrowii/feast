
drop database if exists bopi8w9wr7bkhbph;

create database if not exists bopi8w9wr7bkhbph;

use bopi8w9wr7bkhbph;

create table feasts (
	id int not null auto_increment,
    primary key (id),
	feast_name varchar(255) not null,
    devoured boolean not null
)