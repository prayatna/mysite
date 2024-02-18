---
title: How to wait after user input in Angular forms
author: Prayatna Bhattarai
date: 2021-10-20
tags: ["post", "featured"]
image: /assets/blog/article-1.jpg
imageAlt: Angular forms
description: 
---

Welcome to the very first post on my blog. I am taking all my dev.to posts to my own space because why not? I wanted to use my domain so I decided to host my static content here :).

Let's get straight to the point. I was trying to extract a url from the user input and get a web preview on the fly. I could only get that once I figure out the user has stopped typing. So I wanted to add a delay just before I execute my method to extract the url from the input text.

I have my `PostMessageComponent` like:

``` js
@Component({
	selector: 'post-message',
	templateUrl: './post-message.component.html',	
})
export class PostMessageComponent implements OnInit, OnDestroy {
  message = new FormControl('');
  webLink: string;
  
  messageSubscription: Subscription;
  constructor() { }
  ngOnInit() {
	this.messageSubscription = 
        this.message.valueChanges.pipe(
	  debounceTime(2000),
	  distinctUntilChanged()
          ).subscribe(newMessage => {
		this.webLink = 
                    this.getUrlFromString(newMessage);
	  });
    }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

```

I created a message `FormControl` which has valueChanges as Observable. Through RxJs you can always use `.pipe()` function to run operators one after the other. In this case, I used the `debounceTime(2000)` which emits the observable after 2s has passed. After the function is executed it runs `distinctUntilChanged()` which basically is another function that emits all the items the source Observable will emit only if the value is different from the previous one.

This way, I can now use `getUrlFromString` method after waiting for 2s from the time the user finishes typing. I then use `this.webLink` to call an external service/api and perform other actions.

There could be a better way of solving this, but this is how I tried to solve it. Happy to get everyone's thoughts on it.

PS: If you are subscribing to something, don't forget to unsubscribe. That's why I have a `messageSubscription` which calls the `unsubscribe()` once the component is destroyed.