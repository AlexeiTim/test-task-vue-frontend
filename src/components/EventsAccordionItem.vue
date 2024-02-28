<template class="accordion">
  <div :class="`accordion__item`">
    <div
      :class="`accordion__item-left`"
      :style="{backgroundImage: notActiveElements ? `url('${event.image}')` : ''}"
    >
      <div
        v-if="notActiveElements"
        :class="`item-cover ${!notActiveElements ? 'active' : ''}`"
      ></div>
      <div
        v-if="notActiveElements"
        :class="`item-cover-sub ${!notActiveElements ? 'active' : ''}`"
      ></div>

      <h3>{{ event.name }}</h3>
      <p>{{ "0" + (index + 1) }}</p>
    </div>
    <div class="accordion__item-line"></div>
    <div :class="`accordion__item-right ${!notActiveElements ? 'active' : ''}`">
      <div class="accordion__item-info">
        <div class="info-number">{{ "0" + (index + 1) }}</div>
        <h4>{{ event.name }}</h4>
        <p>{{ event.date }}</p>
        <a
          href="https://egorovagency.by/#main"
          target="_blank"
          ><button class="item__button">More information</button></a
        >
      </div>
      <!-- <img
        :src="event.image"
        alt="123"
      /> -->
      <div
        :style="{
          backgroundImage: `url('${event.image}')`,
        }"
        class="img"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {IEvent} from "../types/event.interface";
const props = defineProps<{
  activeEvent: number;
  event: IEvent;
  index: number;
}>();
const notActiveElements = computed(() => !(props.activeEvent == props.index + 1));
</script>

<style lang="scss" scoped>
.info-number {
  position: absolute;
  top: 0;
  left: -125px;
  font-style: normal;
  font-weight: 600;
  font-size: 380px;
  line-height: 100%;
  text-align: right;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.04);
}
.img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.item__button {
  width: 256px;
  height: 62px;
  left: 0px;
  top: 0px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  /* identical to box height, or 22px */
  background: inherit;
  letter-spacing: 0.03em;

  color: rgba(255, 255, 255, 0.8);

  border: 2px solid rgba(255, 255, 255, 0.8);
  border-left: 7px solid rgba(255, 255, 255, 0.8);
}
.item-cover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(18, 18, 18, 0.7);
  background-blend-mode: darken;
  &-sub {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162c4e 100%);
  }
}
.accordion {
  &__item {
    transition: all 0.4s;
    cursor: pointer;
    display: flex;
    height: 100%;
    overflow: hidden;
    transition: all 0.4s;
    border-bottom: 2px solid rgba(223, 34, 36, 1);
    &-line {
      width: 1px;
      height: 100%;
      background-color: #fff;
    }

    &-left {
      transition: all 0.4s;

      position: relative;
      height: 100%;
      width: 85px;
      background: #162c4e;
      flex-direction: column;
      display: inline-flex;
      justify-content: end;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-color: #162c4e;
      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 100%;
        color: #ffffff;
        transform: rotate(-90deg);
        white-space: nowrap;
        margin: 40px;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 100%;
        letter-spacing: -0.03em;
        color: #ffffff;
        text-align: center;
        margin-bottom: 20px;
        z-index: 2;
      }
    }

    &-right {
      position: relative;
      width: 0px;
      transition: all 0.8s;
    }
    img {
      display: inline-block;
      position: relative;
      z-index: -1;
      bottom: 240px;
    }
    &-info {
      transition: all 0.8s;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 1px;
      height: 100%;
      padding: 50px 66px 50px 42px;
      background: rgba(18, 18, 18, 0.8);
      backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: start;

      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        color: #ffffff;
        margin-bottom: 12px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 25px;
      }
    }
  }
}

.active {
  width: 995px;
}

@media (max-width: 1705px) {
  .item__button {
    width: 256px;
    height: 62px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    /* identical to box height, or 22px */
    background: inherit;
    letter-spacing: 0.03em;

    color: rgba(255, 255, 255, 0.8);

    border: 2px solid rgba(255, 255, 255, 0.8);
    border-left: 7px solid rgba(255, 255, 255, 0.8);
  }
  .item-cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(18, 18, 18, 0.7);
    background-blend-mode: darken;
    &-sub {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162c4e 100%);
    }
  }
  .accordion {
    &__item {
      transition: all 0.4s;
      cursor: pointer;
      display: flex;
      height: 100%;
      overflow: hidden;
      transition: all 0.4s;
      border-bottom: 2px solid rgba(223, 34, 36, 1);
      &-line {
        width: 1px;
        height: 100%;
        background-color: #fff;
      }

      &-left {
        transition: all 0.4s;

        position: relative;
        height: 100%;
        width: 85px;
        background: #162c4e;
        flex-direction: column;
        display: inline-flex;
        justify-content: end;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #162c4e;
        h3 {
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 100%;
          color: #ffffff;
          transform: rotate(-90deg);
          white-space: nowrap;
          margin: 40px;
        }

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 40px;
          line-height: 100%;
          letter-spacing: -0.03em;
          color: #ffffff;
          text-align: center;
          margin-bottom: 20px;
          z-index: 2;
        }
      }

      &-right {
        position: relative;
        width: 0px;
        transition: all 0.8s;
      }
      img {
        display: inline-block;
        position: relative;
        z-index: -1;
        bottom: 240px;
      }
      &-info {
        transition: all 0.8s;

        position: absolute;
        top: 0;
        left: 1px;
        height: 100%;
        padding: 25px;
        background: rgba(18, 18, 18, 0.8);
        backdrop-filter: blur(20px);
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: start;

        h4 {
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 120%;
          color: #ffffff;
          margin-bottom: 12px;
        }

        p {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
        }
      }
    }
  }

  .active {
    width: 995px;
  }
}

@media (max-width: 1140px) {
  .info-number {
    font-size: 152px;
    right: -3%;
  }
  .item__button {
    width: 256px;
    height: 62px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    /* identical to box height, or 22px */
    background: inherit;
    letter-spacing: 0.03em;

    color: rgba(255, 255, 255, 0.8);

    border: 2px solid rgba(255, 255, 255, 0.8);
    border-left: 7px solid rgba(255, 255, 255, 0.8);
  }
  .item-cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(18, 18, 18, 0.7);
    background-blend-mode: darken;
    &-sub {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162c4e 100%);
    }
  }
  .accordion {
    width: auto;
    &__item {
      transition: all 0.4s;
      cursor: pointer;
      display: flex;
      height: 100%;
      overflow: hidden;
      transition: all 0.4s;
      border-bottom: 2px solid rgba(223, 34, 36, 1);
      width: 100%;
      flex-direction: column-reverse;
      &-line {
        width: 1px;
        height: 100%;
        background-color: #fff;
      }

      &-left {
        position: relative;
        height: 85px;
        width: auto;
        background: #162c4e;
        display: flex;
        flex-direction: row-reverse;
        justify-content: start;
        align-items: center;
        gap: 32px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #162c4e;
        padding-left: 40px;
        h3 {
          display: inline-flex;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 100%;
          color: #ffffff;
          transform: rotate(0deg);
          white-space: nowrap;
          margin: 0;
        }

        p {
          display: inline-flex;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 100%;
          letter-spacing: -0.03em;
          color: #ffffff;
          text-align: center;
          margin-bottom: 0;
          z-index: 2;
        }
      }

      &-right {
        position: relative;
        width: 100%;
        height: 0px;
        display: flex;
        flex-direction: column;
        transition: all 0.8s;
        img {
          transition: all 0.8s;
          display: block;
          position: relative;
          z-index: -2;
          bottom: 0;
          height: 0px;
          width: 100%;
        }
        &.active {
          height: 460px;
          img {
            display: block;
            position: relative;
            z-index: -1;
            bottom: 0;
            height: 460px;
            width: 100%;
          }
        }
      }
    }
  }
  .accordion__item-right {
    .accordion__item-info {
      transition: all 0.8s;
      position: absolute;
      top: 0;
      left: 1px;
      height: 0;
      padding: 25px auto 40px 40px;
      background: rgba(18, 18, 18, 0.8);
      backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: start;
      top: 0;
      opacity: 0;
      width: 100%;
      z-index: -5;
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #ffffff;
        margin-bottom: 12px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 25px;
      }
    }
  }
  .accordion__item-right.active {
    transition: all 0.8s;
    .accordion__item-info {
      transition: all 0.8s;
      position: absolute;
      top: 0;
      left: 1px;
      height: 192px;
      padding: 25px;
      background: rgba(18, 18, 18, 0.8);
      backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: start;
      top: 267px;
      width: 100%;
      opacity: 1;
      z-index: 10;
      h4 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #ffffff;
        margin-bottom: 12px;
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 25px;
      }
    }
  }

  .item__button {
    width: 169px;
    font-size: 16px;
    height: 44px;
    color: #FFFFFF;
  }
}

@media (max-width: 479px) {
  .item__button {
    width: 256px;
    height: 62px;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    background: inherit;
    letter-spacing: 0.03em;

    color: rgba(255, 255, 255, 0.8);

    border: 2px solid rgba(255, 255, 255, 0.8);
    border-left: 7px solid rgba(255, 255, 255, 0.8);
  }
  .item-cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(18, 18, 18, 0.7);
    background-blend-mode: darken;
    &-sub {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162c4e 100%);
    }
  }
  .accordion {
    &__item {
      &-left {
        h3 {
          white-space: pre-wrap;
        }
      }
    }
  }
}

@media (max-width: 360px) {
  .info-number {
    font-size: 80px;
    top: 14px;
    right: -3%;
  }
  .accordion__item-left {
    padding-left: 20px;
    p {
      font-size: 32px;
    }
    h3 {
      font-size: 24px;
    }
  }
}
</style>
