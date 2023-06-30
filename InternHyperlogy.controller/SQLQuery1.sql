create database ManagerProperty
use ManagerProperty


create table Staff(
	Id_Staff nvarchar(10) primary key,
	Full_Name nvarchar(30),
	Citizen_Identification nvarchar(13),
	Email nvarchar(30),
	Phone_Number nvarchar(30)
);


create table Property(
	Id_Property nvarchar(10) primary key,
	Name_Property nvarchar(40),
	Id_Staff nvarchar(10),
	Amount int,
	Time_Create datetime,
	Time_Update datetime,
);

insert Staff values (N'NV01',N'Nguyễn Văn A',N'201234512332',N'vanA@gmail.com',N'0367218700')
insert Staff values (N'NV02',N'Nguyễn Văn B',N'201234511111',N'vanB@gmail.com',N'0367218700')

insert Property(Id_Property,Name_Property,Id_Staff,Amount,Time_Create) values (N'TS01',N'Máy giặt',N'NV01',10,GETDATE())
insert Property(Id_Property,Name_Property,Id_Staff,Amount,Time_Create) values (N'TS02',N'Ti vi',N'NV02',10,GETDATE())
insert Property(Id_Property,Name_Property,Id_Staff,Amount,Time_Create) values (N'TS03',N'Cốc',NULL,10,GETDATE())
insert Property(Id_Property,Name_Property,Id_Staff,Amount,Time_Create) values (N'TS04',N'Cốc',NULL,10,GETDATE())
insert Property(Id_Property,Name_Property,Id_Staff,Amount,Time_Create) values (N'TS05',N'Cốc',NULL,10,GETDATE())
insert Property(Id_Property,Name_Property,Id_Staff,Amount,Time_Create) values (N'TS06',N'Cốc',NULL,10,GETDATE())


select * from Property
select * from Staff

select * from Property  join Staff on Property.Id_Staff = Staff.Id_Staff


select * from 