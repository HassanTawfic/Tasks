#!/bin/bash

source dataop.sh

menu(){
select op in Insert Delete Display Exit
do
case $op in
        "Insert")
                insert;;

        "Delete")
                read -r delete_id
                delete $delete_id;;

        "Display")
                read -r id
                display $id;;

        "Exit")
                exit 0;;

        *)
                echo "Error";;
esac
done
}