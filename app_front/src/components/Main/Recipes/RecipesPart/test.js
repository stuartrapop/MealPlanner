<img id="card__image" src={recipe.url} alt="recipe" />
          
            <Card.Header id="card__title">{recipe.title}</Card.Header>
            {/* <Tags tag={recipe.tag} /> */}
            <a>
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star half" />
              4.5/5
            </a>
            <button onClick={handleOnClick} type="button"><Link to={`/recette/${getSlugFromTitle(recipe.title)}`} id={recipe.id} title={recipe.title}>Voir les détails</Link></button>
          