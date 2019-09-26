<template>
    <div class="shop-discount">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="img1"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="img2"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="img3"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="img4"></div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 2.5
            }
        }
    }
}
</script>

<style lang="less" scoped>
.shop-discount{
    padding: 20px;
    background: #FFF;
}
.img1{
    height: 200px;
    width: 100%;
    background: #00AAEE;
}
.img2{
    height: 200px;
    width: 100%;
    background: #00CC;
}
.img3{
    height: 200px;
    width: 100%;
    background: #000099;
}
.img4{
    height: 200px;
    width: 100%;
    background: #00BB00;
}
</style>