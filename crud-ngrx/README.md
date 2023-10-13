# Ngrx Crud-operations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0-next.2.

## Installation

npm install @ngrx/{store,effects,entity,store-devtools} --save
ng add @ngrx/store-devtools@latest
Add Redux devTools Chrome Extension

## Folder Structure

Create Store Folder
In this folder create Actions/Reducers/Effects/Selectors folders
In this folders Add files exp. User.action/effect/reducer/selector.ts

## Imports

//app.module.ts
First of all import StoreModule
After that import EffectsModule
Import reducer file
Import effect file

//For Store view in devtools
Import StoreDevtoolsModule
Import isDevMode

exp.
imports:[
    StoreModule.forRoot({ StoreName(Users): ReducerFile }),
    EffectsModule.forRoot([EffectFile]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
]
