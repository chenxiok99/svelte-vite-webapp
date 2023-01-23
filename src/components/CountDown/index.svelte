<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  //时间
  export let endTime: string = "";
  //添加文字
  export let text: string = "";
  //自定义样式
  export let style: string = "";

  let timer: any = null;
  let info = "";
  const dispatch = createEventDispatcher();

  const addZero = (i: number) => {
    return i < 10 ? `0${i}` : `${i}`;
  };

  const endReport = () => {
    dispatch("end", {
      isEnd: true,
    });
  };

  const countDown = () => {
    const nowTime = new Date();
    // ios使用newDate会出现NaN，这里需要做一下处理
    let str = endTime.replace(/-/g, "/");
    const time = new Date(str);
    const intervalTime = parseInt(
      `${(time.getTime() - nowTime.getTime()) / 1000}`
    );

    const hour = addZero(parseInt(`${intervalTime / (60 * 60)}`));
    const minute = addZero(parseInt(`${(intervalTime / 60) % 60}`));
    const second = addZero(parseInt(`${intervalTime % 60}`));
    if (intervalTime <= 0) {
      clearTimeout(timer);
      timer = null;
      info = "";
      endReport();
    } else {
      info = `${text}${hour}小时${minute}分${second}秒`;
      timer = setTimeout(countDown, 1000);
    }
  };

  onMount(() => {
    countDown();
  });

  onDestroy(() => {
    clearTimeout(timer);
    timer = null;
  });
</script>

<div class="task-info w-full" {style}>{info}</div>

<style lang="less">
  .task-info {
    color: rgba(255, 93, 0, 1);
    @apply text-xs;
  }
</style>
