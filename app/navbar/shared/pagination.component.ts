import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'pagination',
    template:`
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li [class.disabled]="currentpage==1">
                <a (click)="previous()" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li *ngFor="let page of pages" 
                (click)="emitPageno(page)"
                [class.active]="currentpage==page"><a>{{page}}</a></li>
            <li [class.disabled]="currentpage==pages.length">
                <a (click)="next()"aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>


    `
})

export class PaginationComponent implements OnChanges{

@Input() items=[];
@Input('page-size') pagesize=10;
@Output('page-changed') pagechanged=new EventEmitter();
currentpage;
pages:any[];


ngOnChanges(){
    this.currentpage=1;
    var pagecount=this.items.length/this.pagesize;
    this.pages=[];
    for(var i=1;i<=pagecount;i++){
        this.pages.push(i);
    }

}
emitPageno(page)
{
    this.currentpage=page;
    this.pagechanged.emit(page);
}

previous(){
    if(this.currentpage==1){
        return;
    }

    this.currentpage--;
    this.pagechanged.emit(this.currentpage);    
}

next(){
    if(this.currentpage==this.pages.length){
        return;
    }

    this.currentpage++;
    this.pagechanged.emit(this.currentpage);
}

}