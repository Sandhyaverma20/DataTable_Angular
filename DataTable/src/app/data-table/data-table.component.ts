import { Component, OnInit } from '@angular/core';

interface Supplier{
  name: string,
  address: string,
  phone: string,
  email: string
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
          
        suppliers: Array<Supplier> = [
          {name:'Name1' , address:'Address1' , phone:'0987654321' , email:'abc1@gmail.com'  },
          {name:'Name2' , address:'Address2' , phone:'0987654321' , email:'abc2@gmail.com'  },
          {name:'Name3' , address:'Address3' , phone:'0987654321' , email:'abc3@gmail.com'  },
          {name:'Name4' , address:'Address4' , phone:'0987654321' , email:'abc4@gmail.com'  },
          {name:'Name5' , address:'Address5' , phone:'0987654321' , email:'abc5@gmail.com'  },
          {name:'Name6' , address:'Address6' , phone:'0987654321' , email:'abc6@gmail.com'  },
          {name:'Name7' , address:'Address7' , phone:'0987654321' , email:'abc7@gmail.com'  },
          {name:'Name8' , address:'Address8' , phone:'0987654321' , email:'abc8@gmail.com'  },
          {name:'Name9' , address:'Address9' , phone:'0987654321' , email:'abc9@gmail.com'  },
          {name:'Name10' , address:'Address10' , phone:'0987654321' , email:'abc10@gmail.com'  },
          {name:'Name11' , address:'Address1' , phone:'0987654321' , email:'abc1@gmail.com'  },
          {name:'Name12' , address:'Address2' , phone:'0987654321' , email:'abc2@gmail.com'  },
          {name:'Name13' , address:'Address3' , phone:'0987654321' , email:'abc3@gmail.com'  },
          {name:'Name14' , address:'Address4' , phone:'0987654321' , email:'abc4@gmail.com'  },
          {name:'Name15' , address:'Address5' , phone:'0987654321' , email:'abc5@gmail.com'  },
          {name:'Name16' , address:'Address6' , phone:'0987654321' , email:'abc6@gmail.com'  },
          {name:'Name17' , address:'Address7' , phone:'0987654321' , email:'abc7@gmail.com'  },
          {name:'Name18' , address:'Address8' , phone:'0987654321' , email:'abc8@gmail.com'  },
          {name:'Name19' , address:'Address9' , phone:'0987654321' , email:'abc9@gmail.com'  },
          {name:'Name20' , address:'Address10' , phone:'0987654321' , email:'abc10@gmail.com'  },
          {name:'Name21' , address:'Address10' , phone:'0987654321' , email:'abc10@gmail.com'  },
        ]

        currentPage: number=1;
        pageSize: number=5;


        filteredSuppliers: Array<Supplier> = this.suppliers;
        pageSizes: Array<Number> = [5,10,20];

        ngOnInit(){
          this.visibleData();
          this.pageNumbers();
        }

        visibleData(){
          let startIndex = (this.currentPage -1) * this.pageSize;
          let endIndex = startIndex + this.pageSize;
          return this.filteredSuppliers.slice(startIndex,endIndex);
        }

        nextPage(){
          this.currentPage++;
          this.visibleData();
        }
        previousPage(){
          this.currentPage--;
          this.visibleData();

        }
        pageNumbers(){
          let totalPages = Math.ceil( this.filteredSuppliers.length / this.pageSize);
          let pageNumArray = new Array(totalPages);
          return pageNumArray;
        }

        changePage(pageNumbers : number){
          this.currentPage =pageNumbers;
          this.visibleData();

        }

        filterData(serchTerm:string){
          this.filteredSuppliers = this.suppliers.filter((item) => {
          return Object.values(item).some((val) => {
              val.toLowerCase().includes(serchTerm.toLowerCase());
            })
          } );
          this.visibleData();
        }

        changePageSize(pageSize:any){
          this.pageSize = pageSize;
          this.visibleData();
        }
        deleteData(item:any){
          item.isedit = true;
        }
        editData(item:any){
          item.isedit = true;

        }
}
