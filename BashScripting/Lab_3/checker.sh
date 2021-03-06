#!/bin/bash

checkDB() {
        RESULT=`mysql -u root -padmin --skip-column-names -e "show databases like 'invoices'"`
        if [ $RESULT == 'invoices' ]; then
                echo "Database exists"
        else
                echo "Database doesn't exist"
        fi
}

checkTables() {
        TABLE1=`mysql -u root -padmin --skip-column-names -e "use invoices; show tables like 'invoices'"`
        TABLE2=`mysql -u root -padmin --skip-column-names -e "use invoices; show tables like 'invoice_details'"`

        if [ $TABLE1 == 'invoices' ] && [ $TABLE2 == 'invoice_details' ]; then
                echo "Tables exist"
        else
                echo "Tables don't exist"
        fi
}

checkInvoice() {
        RESULT=`mysql -u root -padmin --skip-column-names -e "select * from invoices.invoices where id = $1"`
        if [ -z "$RESULT" ]; then
                echo "Not found"
        else
                echo $RESULT
        fi
}