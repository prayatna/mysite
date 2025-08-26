# TIL: How to pass data to child component on a hybrid Angular project

UPDATE: this post is migrated from dev.to

I have been working on a project that is in the process of transitioning from AngularJS to Angular. We are using the hybrid approach of having both versions on the same project and slowly migrating components to the new Angular version.

#### The Problem

Parent component is an AngularJS component - `messageListingComponent` and the child component is an Angular component - `postMessageComponent` . I need to pass an `id` from the parent to the child component.

##### AngularJS way of using the binding to pass the data

###### message-listing-component.html

```html
<post-message post-id="$ctrl.id"></post-activity>
```

The `postMessageComponent` is an AngularJS component

#### Solution
With few google searchs and going through stackoverflow I found a way to do this:

##### Angular way of using the binding to pass the data

###### message-listing-component.html

```html
<post-message [post-id]="$ctrl.id"></post-activity>
```

The `postMessageComponent` is an Angular component. Notice the `[]`? Even on an Angular template, we use the `[]` to wrap the input.

My postMessageComponent looks like this:
###### post-message.component.html

```typescript
@Component({
  selector: "post-message",
  templateUrl: "./post-message.component.html",
})
export class PostMessageComponent implements OnInit, OnDestroy {
  @Input() postId: number;

  // Rest of the code
}
```

It takes `postId` as input which is why we have `[post-id]` on the template.

As this is a hybrid project, in order for AngularJS to understand the `postMessageComponent` we need to downgrade our component. I don't want to go into details about downgrading the component but you have to add this line for your AngularJS app module

```javascript
.directive("postMessage", downgradeComponent({ component: PostMessageComponent, inputs: ['postId'] } ))
```

The key here is to define the inputs that are used on the `PostMessageComponent`. If the component has `Outputs()` then that goes in there too.

And that's it. Hope that helps.
