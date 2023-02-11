import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: any;
  public routerPaths: string[] = [];
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => { this.name = params['name']; })
    if (this.router.config.length > 0) {
      this.router.config.map(p => {
        if (p.path) this.routerPaths.push(p.path)
      })
    }
  }
}
