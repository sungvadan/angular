import { Component, Input } from '@angular/core'
@Component({
    moduleId: module.id,
    selector: 'feature-details',
    templateUrl: 'feature-details.component.html',
    styles: ['.box{border:2px;}']
})
export class FeatureDetailsComponent{
    @Input() ftr:any;
}