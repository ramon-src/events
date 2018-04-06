<template>
  <div class="col-lg-3">
    <div class="card c-card">
      <label class="c-card__date-label">13/MAR</label>
      <img class="card-img-top c-card__image" src="https://anacuder.com/wp-content/uploads/2017/09/every-school-needs-to-adopt-the-birthday-cake-ban.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title c-card__title">Aniversariantes do mês!</h5>
        <div class="c-card__info-container">
          <div class="c-card__info">
            <span class="c-card__info-label">O que:</span>
            <span class="c-card__info-description">Vamos fazer uma baita festa!</span>
          </div>
          <div class="c-card__info">
            <span class="c-card__info-label">Para quem:</span>
            <span class="c-card__info-description">Fred, Sebastian, Felix...</span>
          </div>
          <div class="c-card__info">
            <span class="c-card__info-label">Onde:</span>
            <span class="c-card__info-description">4beer, Porto Alegre</span>
          </div>
          <div class="c-card__info">
            <span class="c-card__info-label">Quando:</span>
            <span class="c-card__info-description">13/03/2018</span>
          </div>
        </div>
        <div class="c-card__action-buttons">
          <button class="btn btn-default">
            adsasd
          </button>
          <div class="btn-group text-right">
            <button type="button" class="btn btn-danger">
              <i class="fa fa-star"></i> Tenho interesse
            </button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#"><i class="fa fa-star"></i> Tenho interesse</a>
              <a class="dropdown-item" href="#"><i class="fa fa-check"></i> Comparecerei</a>
              <a class="dropdown-item" href="#"><i class="fa fa-times-o"></i> Ignorar</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
};
</script>

<style lang="scss">
  .c-card {

    & &__info-container {
      text-align: left;
      margin-bottom: 15px;
    }

    & &__info {
      margin-bottom: 5px;

      &:last-child {
      }
    }

    & &__info-label {
      font-family: "Patua One", cursive;
      margin-right: 5px;
    }

    & &__info-description {
      display: inline;
    }
  }
  .c-card__image {
    width: 100%;
    height: 180px;
    display: block;
  }

  .c-card__title {
    font-family: "Patua One", cursive;
    /* font-family: 'Vidaloka', serif; */
    /* font-family: 'Boogaloo', cursive; */
  }

  .c-card__date-label {
    position: absolute;
    top: 15px;
    left: 15px;
    /* font-weight: bold; */
    color: #fff;
  }
</style>

