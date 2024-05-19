import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrl: './package.component.scss'
})
export class PackageComponent  implements OnInit{
  showDetailsFlag: boolean = false;
  additionalDetails: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(type: string) {
    // Logic to display details of the selected subscription type
    console.log(`Clicked on ${type} subscription`);
  }

  showMore(type: string) {
    // Logic to show additional details when "Read more" button is clicked
    // This is just an example, you can replace with your own logic
    if (type === 'gold') {
      this.additionalDetails = "Gold membership includes access to sauna, pool, and unlimited classes.";
    } else if (type === 'silver') {
      this.additionalDetails = "Silver membership includes access to gym equipment and limited classes.";
    } else if (type === 'normal') {
      this.additionalDetails = "Normal membership includes basic access to gym facilities.";
    }
    this.showDetailsFlag = true;
  }
}
