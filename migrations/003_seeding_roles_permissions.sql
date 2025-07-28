

insert into roles (name) values   ('admin'), ('merchant'),('user')



insert into permissions (name) values 
('createPlan'), ('updatePlan'),('deletePlan'),('viewPlan'),-- for plan routes
('createSubscription'),('updateSubscription'),('deleteSubscription'),('viewSubscription'),-- for subscription routes
('createMerchant'),('updateMerchant'),('deleteMerchant'),('viewMerchant'),-- for merchant routes
('createUser'),('updateUser'),('deleteUser'),('viewUser'),-- for user routes
('createRole'),('updateRole'),('deleteRole'),('viewRole'),-- for role routes
('viewPermissions'),




-- Admin gets all permissions
insert into role_permissions ("roleId", "permissionId")
select r.id, p.id from roles r, permissions p where r.name = 'admin';

-- Merchant
insert into role_permissions ("roleId", "permissionId")
select r.id, p.id from roles r, permissions p 
where r.name = 'merchant' and p.name in ('createPlan','updatePlan','deletePlan','viewPlan');

-- User 
insert into role_permissions ("roleId", "permissionId")
select r.id, p.id from roles r, permissions p 
where r.name = 'user' and p.name in ('createSubscription','updateSubscription','deleteSubscription','viewSubscription');




insert into user_role("userId", "roleId")
select 1,id from roles where name='admin';


--user → role(s) → permission(s)
--Uses joins instead of subqueries for performance and clarity

select p.name as permission from users u join
user_role ur on u.id=ur."roleId"  join --this joins user to a role 
role_permissions rp on ur."roleId"=rp."roleId" join -- this join role to a permission 
permissions p on rp."permissionId"=p.id -- this join to the actual permissions 
where u.id=1





--result of above query  :
-- create_plan
-- subscribe
-- view_dashboard



