import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  currentYear: any;
  currentDay: any;
  currentTime: any;
  currentMonth: any;
  currentDate: any;

  @ViewChild('elementRef', { static: true }) elementRef: ElementRef | undefined;



  ngAfterViewInit(): void {
    if (this.elementRef) {
      this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    if (this.elementRef) {
      this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor() {}
 
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.updateDayAndTime();
    setInterval(() => this.updateDayAndTime(), 1000); 
  }
 
  updateDayAndTime(): void {
    const now = new Date();
    const currentDay = now.getDate();
    this.currentTime = now.toLocaleTimeString();
    this.currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);
    this.currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now);
    this.currentDate = currentDay;
  }
 
  // scrollToTop() {
  //   if (this.scrollToTopButton) {
  //     this.scrollToTopButton.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }
  
}
