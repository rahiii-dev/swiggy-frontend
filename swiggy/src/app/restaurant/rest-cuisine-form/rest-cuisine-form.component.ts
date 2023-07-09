import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { Cuisine } from 'src/app/shared/interfaces/cuisine';

@Component({
  selector: 'app-rest-cuisine-form',
  templateUrl: './rest-cuisine-form.component.html',
  styleUrls: ['./rest-cuisine-form.component.css']
})
export class RestCuisineFormComponent implements OnInit{
  @Output() itemAdded = new EventEmitter<boolean>();
  @Output() itemUpdated = new EventEmitter<boolean>();

  submitType: string = 'add';
  cuisineID: any;

  result!: string;
  formError!: string;

  CuisineForm!: FormGroup;

  private initCuisineForm() {
    this.CuisineForm = new FormGroup({
      'cuisine': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'image': new FormControl(null, [Validators.required]),
      'imageSource': new FormControl(null, [Validators.required]),
      'cuisine_type': new FormControl(null, [Validators.required]),
      'price': new FormControl(null, [Validators.required, Validators.min(10)]),
      'stocks': new FormControl(null, [Validators.required, Validators.min(5)]),
    })
  }

  constructor(private rest$: RestaurantService){}

  ngOnInit(): void {
    this.initCuisineForm()
  }

  updateForm(data: Cuisine){
    this.result = ''
    this.formError = ''
    
    this.CuisineForm.patchValue({
      'cuisine': data.cuisine,
      'description': data.description,
      'cuisine_type': data.cuisine_type,
      'image': null,
      'imageSource': null,
      'price': data.price,
      'stocks': data.stocks
    })

    this.CuisineForm.get('image')?.removeValidators(Validators.required);
    this.CuisineForm.get('image')?.updateValueAndValidity();
    this.CuisineForm.get('imageSource')?.removeValidators(Validators.required);
    this.CuisineForm.get('imageSource')?.updateValueAndValidity();

    this.cuisineID = data.id;
    this.submitType = 'update';
  }

  onCuisneFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.CuisineForm.patchValue({
        imageSource: file
      })
    }
  }

  CusineFormSubmit(){
    this.result = ''
    this.formError = ''

    const formData = new FormData();

    // Append the file and other data to the form
    const imageFile = this.CuisineForm.get('imageSource')?.value
    if(imageFile){
      formData.append('image', imageFile);
    }

    formData.append('cuisine', this.CuisineForm.get('cuisine')?.value);
    formData.append('description', this.CuisineForm.get('description')?.value);
    formData.append('cuisine_type', this.CuisineForm.get('cuisine_type')?.value);
    formData.append('price', this.CuisineForm.get('price')?.value);
    formData.append('stocks', this.CuisineForm.get('stocks')?.value);

    // add
    if(this.submitType == 'add'){
      this.result = "Adding Your Cuisine"
      this.rest$.AddCuisine(formData).subscribe({
        next: data => {
          this.result = "Cuisine Added Successfully"
          this.itemAdded.emit(true)
          this.CuisineForm.reset()
        },
        error: err => {
          this.result = ''
          this.formError = err.message
        }
      });
    }

    if(this.submitType == 'update'){
      console.log("update")
      this.result = "Updating Your Cuisine"
      this.rest$.updateCuisine(this.cuisineID, formData).subscribe({
        next: data => {
          console.log(data)
          this.result = "Cuisine Added Successfully"
          this.itemUpdated.emit(true)
          this.submitType = 'add';
        },
        error: err => {
          console.log(err)
          this.result = ''
          this.formError = err.message
        }
      });
    }

  }
}
