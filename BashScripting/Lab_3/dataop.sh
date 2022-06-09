#!/bin/bash
######## Insert invoices into database from local text files
### Exit codes
###             0: Success

insert() {
        INV=$(awk '{print "insert into invoices.invoices values(" $1 ", \"" $2 "\", \"" $3 "\", " $4 ");"}' invoices.txt)
        INVD=$(awk '{print "insert into invoices.invoice_details (invoice_id, item, price, quantity) values(" $1 ", \"" $2 "\", " $3 ", " $4 ");"}' invoice_details.txt)
        mysql -u root -padmin -e "$INV"
        mysql -u root -padmin -e "$INVD"
        echo "Inserted"
}

delete() {
        mysql -u root -padmin -e "delete from invoices.invoice_details where invoice_id = $1"
        mysql -u root -padmin -e "delete from invoices.invoices where id = $1"
        echo "Deleted"
}

display() {
        mysql -u root -padmin -e "select * from invoices.invoices, invoices.invoice_details where id = $1"
}