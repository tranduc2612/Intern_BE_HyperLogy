create database KhoThucTap
use KhoThucTap

drop database KhoThucTap

create table NhanVien(
	id_NV nvarchar(10) primary key,
	hoten nvarchar(30),
	cmnd nvarchar(13),
	email nvarchar(30),
	sdt nvarchar(30)
)


create table TaiSan(
	id nvarchar(10) primary key,
	tentaiSan nvarchar(40),
	id_NV nvarchar(10),
	sl int,
	img ntext,
	isDelete nvarchar(20),
	timecreate datetime,
	timedelete datetime,
	timeupdate datetime,
);

insert NhanVien values (N'NV01',N'Nguyễn Văn A',N'201234512332',N'vanA@gmail.com',N'0367218700')
insert NhanVien values (N'NV02',N'Nguyễn Văn B',N'201234511111',N'vanB@gmail.com',N'0367218700')

insert TaiSan(id,tentaiSan,id_NV,sl) values (N'TS01',N'Máy giặt',N'NV01',10)
insert TaiSan(id,tentaiSan,sl) values (N'TS02',N'Ti vi',2)

select * from TaiSan
select * from NhanVien