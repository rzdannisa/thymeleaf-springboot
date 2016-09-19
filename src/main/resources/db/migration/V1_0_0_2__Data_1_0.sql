INSERT INTO mynotes (id,title,note) VALUES
('1','Kong','King is my first cat'),
('2','King','Kong is my second cat'),
('3','Meng Cin','Meng Cin is my third cat');

INSERT INTO `c_security_role` (`id`,`nama`,`description`) VALUES
('admin','admin','Application Admin'),
('user','user','Application User');

INSERT INTO `c_security_permission` (`id`,`permission_label`,`permission_value`) VALUES
('mynotes_update','Edit Mynotes','ROLE_MYNOTES_UPDATE'),
('mynotes_view','View Mynotes','ROLE_MYNOTES_VIEW'),
('mynotes_create','Create Mynotes','ROLE_MYNOTES_CREATE'),
('mynotes_delete','Delete Mynotes','ROLE_MYNOTES_DELETE'),
('user_view','View User','ROLE_USER_VIEW');

INSERT INTO `c_security_role_permission` (`id_role`,`id_permission`) VALUES
('admin','mynotes_update'),
('admin','mynotes_view'),
('admin','mynotes_create'),
('admin','mynotes_delete'),
('user','mynotes_view'),
('user','user_view'),
('admin','user_view');

INSERT INTO `c_security_user` (`id`,`username`,`password`,`active`,`id_role`) VALUES
('1','admin','admin',true,'admin'),
('2','user','user',true,'user');
