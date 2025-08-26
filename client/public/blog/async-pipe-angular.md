# TIL: How to use async | pipe in Angular

I have a service that calls the api and gets some data to use it on my `MessagePreview` component.

#### message-preview.component.ts
```typescript
import { Component } from '@angular/core';
//other imports

@Component({
  selector: 'message-preview',
  templateUrl: './message-preview.component.html',
})
export class MessagePreviewComponent  {
  previews$;
  latestValue:PreviewResponse[];
  constructor(private previewService: PreviewService){}
  
  ngOnInit(){
    this.previews$ = this.previewService()
          .subscribe(value => this.latestValue = value);
  }

  ngOnDestroy(){
    this.previews$.unsubscribe();
  }
}
```
And then on the `message-preview.component.html` you would use the `latestValue`

### An effective way of using the async pipe
#### message-preview.component.ts
```typescript
import { Component } from '@angular/core';
//other imports

@Component({
  selector: 'message-preview',
  templateUrl: './message-preview.component.html',
})
export class MessagePreviewComponent  {
  previews$: Observable<PreviewResponse[]>;
  latestValue:PreviewResponse[];

  constructor(private previewService: PreviewService){}
  
  ngOnInit(){
    this.previews$ = this.previewService();
  }
}
```
Notice here, I do not use the `ngOnDestroy()` hook because I am not subscribing to anything. And on my template, I will use the observable directly with the `| async` like:

#### message-preview.component.html
```html
<div>
--
 <ng-container *ngFor="let preview of previews$ | async">
   {{preview.title}}
 </ng-container>
--
<div>
```
This way, I do not have to unsubscribe and can go with writing less code.
Until next time.