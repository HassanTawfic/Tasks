#! /bin/bash 
########################
#Exit Codes 
##### 0 #### Success
##### 1 #### Fail
user="root"
passwd="12345678"
mysql -u${user} -p${passwd} -e "use bash1"
mysql -u${user} -p${passwd} -e "show databases"
#{print $1 ; printf("insert into bash1.Invoices values (\"%s\", "%d");, $1,$2 )}
cat Invoices.txt | awk -F":" '{printf("insert into bash1.Invoices Values (NULL, \"%s\",%d);", $1, $2);}' | mysql -u${user} -p${passwd}
exit 0
