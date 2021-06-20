class RecipeItem extends HTMLElement{

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set recipe(recipe) {
        this._recipe = recipe;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .img-recipe {
                    width: 100%;
                    max-height: 350px;
                    object-fit: cover;
                    object-position: center;
                }
                
                .resep-info {
                    padding: 24px;
                }
                
                .resep-info > h2 {
                    font-weight: lighter;
                }
                
                .resep-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
                .resep{
                    margin-top: 30px;                   
                }
                .leftside{
                    float:left;
                    width:70%;
                }
                .leftside p{
                    text-align:justify;
                }
                .rightside{
                    float:right;
                    width:30%;
                }
                .col-sm-5, .col-sm-2{
                    position:relative;
                    z-index:-1;
                    width:100%;
                    min-height:1px;
                    padding-right:5px;
                    padding-left:5px;
                }
                .col-sm-5{
                    -webkit-box-flex:0;-
                    ms-flex:0 0 46%;
                    flex:0 0 46%;
                    max-width:46%;
                    text-align:left;
                }
                .col-sm-2{
                    -webkit-box-flex:0;
                    -ms-flex:0 0 8%;
                    flex:0 0 8%;
                    max-width:8%;
                    text-align:center;
                }
                .row{
                    display:-webkit-box;
                    display:-ms-flexbox;
                    display:flex;
                    -ms-flex-wrap:wrap;
                    flex-wrap:wrap;
                    margin-right:15px;
                    margin-left:15px
                }
                </style>
                <div class="container resep">
                    <h2>${this._recipe.strMeal}</h2>
                    <div class="row resep-info">
                        <div class="col-md-8 leftside">
                            <img class="img-recipe" src="${this._recipe.strMealThumb}" alt="">
                            <p>${this._recipe.strInstructions}</p>
                        </div>
                        <div class="col-md-4 rightside">
                            <h3>Ingredients</h3>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient1}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure1}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient2}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure2}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient3}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure3}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient4}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure4}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient5}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure5}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient6}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure6}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient7}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure7}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient8}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure8}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient9}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure9}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient10}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure10}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient11}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure11}</p></div>
                            </div>
                            <div class="row">
                                <div class="col-sm-5"><p>${this._recipe.strIngredient12}</p></div>
                                <div class="col-sm-2"><p>:</p></div>
                                <div class="col-sm-5"><p>${this._recipe.strMeasure12}</p></div>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
}

customElements.define("recipe-item", RecipeItem);