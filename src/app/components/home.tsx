import styles from '@/styles/home.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContent}>
      <header className={styles.header}>
        <h1>Hi, Welcome back 👋</h1>
      </header>
      
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>🛍️</span>
            <span className={styles.growth}>+2.6%</span>
          </div>
          <h3>Weekly sales</h3>
          <p className={styles.statValue}>714k</p>
          <div className={styles.chart}></div>
        </div>

        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>👥</span>
            <span className={styles.decline}>-0.1%</span>
          </div>
          <h3>New users</h3>
          <p className={styles.statValue}>1.35m</p>
          <div className={styles.chart}></div>
        </div>

        <div className={`${styles.statCard} ${styles.yellow}`}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>🛒</span>
            <span className={styles.growth}>+2.8%</span>
          </div>
          <h3>Purchase orders</h3>
          <p className={styles.statValue}>1.72m</p>
          <div className={styles.chart}></div>
        </div>

        <div className={`${styles.statCard} ${styles.red}`}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>✉️</span>
            <span className={styles.growth}>+3.6%</span>
          </div>
          <h3>Messages</h3>
          <p className={styles.statValue}>234</p>
          <div className={styles.chart}></div>
        </div>
      </div>
      <div className={styles.home}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod leo id mi fermentum, ut tempus justo facilisis. In varius eros id nisi fringilla, vel porttitor ligula gravida. Nam vehicula nisl eget urna elementum, non venenatis risus lacinia. Cras congue quam et urna bibendum, in euismod urna laoreet. Integer sit amet urna urna. Mauris luctus metus lacus, in fermentum elit auctor ac. Curabitur quis leo vehicula, convallis libero et, sodales justo. Nam sed odio vitae elit interdum luctus sit amet sed lectus. Maecenas ac est id ligula ullamcorper vestibulum sed nec libero. Aliquam erat volutpat. Fusce tempus, sapien et pellentesque venenatis, orci eros hendrerit odio, id ullamcorper orci quam et leo. Aliquam pharetra risus et magna interdum dignissim. Nulla nec tincidunt mauris, non varius lorem. Nulla facilisi.

Suspendisse potenti. Curabitur scelerisque, arcu sed convallis hendrerit, risus libero pretium risus, in accumsan purus libero nec risus. Integer eu est id ipsum vehicula interdum. Cras malesuada odio id tortor scelerisque, vitae malesuada magna aliquet. Nam ut fermentum tortor. Nulla facilisi. Proin tincidunt turpis sed purus pulvinar vestibulum. Sed faucibus dui ut tempor vestibulum. Proin rhoncus mauris sed nulla eleifend, vel tincidunt metus scelerisque.

Aliquam erat volutpat. Mauris nec sem sit amet arcu tristique efficitur. Nullam vel odio ut dui vulputate efficitur. Fusce vel risus non augue malesuada tempus. Etiam ut sapien at nisl tristique auctor et in odio. Nulla facilisi. Duis at erat bibendum, dignissim nisl a, condimentum libero. Nam bibendum, tortor id pharetra consequat, justo turpis accumsan lacus, sed ultricies purus felis sit amet elit. Cras a efficitur felis. Donec ullamcorper, ante nec convallis fermentum, felis enim gravida nunc, at mollis sem mauris nec odio. Pellentesque dignissim orci in purus porta, a bibendum magna volutpat.

Praesent id lacus sem. Phasellus laoreet, erat sit amet venenatis gravida, lacus justo tincidunt dolor, sed pellentesque erat erat nec felis. Duis a tellus vel augue sagittis hendrerit. Aenean at felis eget erat pulvinar interdum nec ut sem. Integer id erat neque. Fusce gravida leo ac nisi cursus, nec egestas lacus congue. Nullam vitae est lectus. Nam consequat facilisis arcu sit amet volutpat.

Quisque vel quam neque. Duis bibendum ligula ac dictum viverra. In in elit non nisl lacinia ornare. Nullam non varius metus, vitae dapibus nisl. Maecenas condimentum nibh a facilisis varius. Curabitur hendrerit nulla ut sem consectetur, a venenatis mi lacinia. Duis sed varius nulla. Curabitur tincidunt tellus quis libero varius, quis lacinia ipsum scelerisque. In semper nulla et ultricies dictum. Pellentesque vulputate purus sed convallis hendrerit. Phasellus vehicula, magna in rhoncus accumsan, dolor sapien dapibus dolor, at lobortis ligula nisl et odio. Sed quis urna eu purus rhoncus efficitur non ut ex. In vel purus nulla. Fusce feugiat consectetur odio ut ornare.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod leo id mi fermentum, ut tempus justo facilisis. In varius eros id nisi fringilla, vel porttitor ligula gravida. Nam vehicula nisl eget urna elementum, non venenatis risus lacinia. Cras congue quam et urna bibendum, in euismod urna laoreet. Integer sit amet urna urna. Mauris luctus metus lacus, in fermentum elit auctor ac. Curabitur quis leo vehicula, convallis libero et, sodales justo. Nam sed odio vitae elit interdum luctus sit amet sed lectus. Maecenas ac est id ligula ullamcorper vestibulum sed nec libero. Aliquam erat volutpat. Fusce tempus, sapien et pellentesque venenatis, orci eros hendrerit odio, id ullamcorper orci quam et leo. Aliquam pharetra risus et magna interdum dignissim. Nulla nec tincidunt mauris, non varius lorem. Nulla facilisi.

Suspendisse potenti. Curabitur scelerisque, arcu sed convallis hendrerit, risus libero pretium risus, in accumsan purus libero nec risus. Integer eu est id ipsum vehicula interdum. Cras malesuada odio id tortor scelerisque, vitae malesuada magna aliquet. Nam ut fermentum tortor. Nulla facilisi. Proin tincidunt turpis sed purus pulvinar vestibulum. Sed faucibus dui ut tempor vestibulum. Proin rhoncus mauris sed nulla eleifend, vel tincidunt metus scelerisque.

Aliquam erat volutpat. Mauris nec sem sit amet arcu tristique efficitur. Nullam vel odio ut dui vulputate efficitur. Fusce vel risus non augue malesuada tempus. Etiam ut sapien at nisl tristique auctor et in odio. Nulla facilisi. Duis at erat bibendum, dignissim nisl a, condimentum libero. Nam bibendum, tortor id pharetra consequat, justo turpis accumsan lacus, sed ultricies purus felis sit amet elit. Cras a efficitur felis. Donec ullamcorper, ante nec convallis fermentum, felis enim gravida nunc, at mollis sem mauris nec odio. Pellentesque dignissim orci in purus porta, a bibendum magna volutpat.

Praesent id lacus sem. Phasellus laoreet, erat sit amet venenatis gravida, lacus justo tincidunt dolor, sed pellentesque erat erat nec felis. Duis a tellus vel augue sagittis hendrerit. Aenean at felis eget erat pulvinar interdum nec ut sem. Integer id erat neque. Fusce gravida leo ac nisi cursus, nec egestas lacus congue. Nullam vitae est lectus. Nam consequat facilisis arcu sit amet volutpat.

Quisque vel quam neque. Duis bibendum ligula ac dictum viverra. In in elit non nisl lacinia ornare. Nullam non varius metus, vitae dapibus nisl. Maecenas condimentum nibh a facilisis varius. Curabitur hendrerit nulla ut sem consectetur, a venenatis mi lacinia. Duis sed varius nulla. Curabitur tincidunt tellus quis libero varius, quis lacinia ipsum scelerisque. In semper nulla et ultricies dictum. Pellentesque vulputate purus sed convallis hendrerit. Phasellus vehicula, magna in rhoncus accumsan, dolor sapien dapibus dolor, at lobortis ligula nisl et odio. Sed quis urna eu purus rhoncus efficitur non ut ex. In vel purus nulla. Fusce feugiat consectetur odio ut ornare.</p>
    
      </div>
    </div>
  );
}

export default HomePage;