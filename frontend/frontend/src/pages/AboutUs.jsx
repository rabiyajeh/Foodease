import React from "react";

const AboutUs = () => {
  // Define style objects
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#444",
      lineHeight: "1.6",
      padding: "0 20px",
    },
    hero: {
      backgroundImage: "url('https://via.placeholder.com/1200x400')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      padding: "100px 20px",
      textAlign: "center",
    },
    heroText: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "inline-block",
      padding: "20px",
      borderRadius: "10px",
    },
    section: {
      padding: "60px 20px",
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: "2.5em",
      marginBottom: "20px",
      position: "relative",
      display: "inline-block",
    },
    sectionTitleAfter: {
      content: '""',
      width: "50px",
      height: "4px",
      backgroundColor: "#f8b400",
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    missionCards: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "40px",
    },
    missionCard: {
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "30px",
      maxWidth: "300px",
      textAlign: "center",
      transition: "transform 0.3s",
    },
    missionCardHover: {
      transform: "scale(1.05)",
    },
    missionCardImage: {
      width: "80px",
      height: "80px",
      marginBottom: "20px",
    },
    teamGrid: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "40px",
      marginTop: "40px",
    },
    teamCard: {
      textAlign: "center",
      transition: "transform 0.3s",
    },
    teamCardHover: {
      transform: "scale(1.05)",
    },
    teamCardImage: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      marginBottom: "15px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1>About FoodEase</h1>
          <p>Delivering Delicious Meals Right to Your Doorstep</p>
        </div>
      </section>

      {/* Our Story */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Our Story
          <span style={styles.sectionTitleAfter}></span>
        </h2>
        <p>
          FoodEase was founded with a simple goal in mind—bring tasty, affordable, and fresh meals
          to people everywhere. Starting from a small kitchen, we've grown into a network of
          passionate chefs and dedicated riders, all working together to ensure your dining
          experience is nothing short of amazing.
        </p>
      </section>

      {/* Our Mission */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Our Mission
          <span style={styles.sectionTitleAfter}></span>
        </h2>
        <div style={styles.missionCards}>
          {[
            {
              imgSrc: "https://via.placeholder.com/80",
              title: "Quality Ingredients",
              description: "We source our ingredients daily to guarantee freshness and flavor.",
            },
            {
              imgSrc: "https://via.placeholder.com/80",
              title: "Fast Delivery",
              description: "Your orders arrive hot and on time, every time.",
            },
            {
              imgSrc: "https://via.placeholder.com/80",
              title: "Customer Service",
              description: "We’re always here to help—just a phone call or chat away!",
            },
          ].map((card, index) => (
            <div
              key={index}
              style={styles.missionCard}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={card.imgSrc} alt={card.title} style={styles.missionCardImage} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Meet the Team
          <span style={styles.sectionTitleAfter}></span>
        </h2>
        <div style={styles.teamGrid}>
          {[
            {
              imgSrc: "https://via.placeholder.com/150",
              name: "John Doe",
              position: "CEO & Founder",
            },
            {
              imgSrc: "https://via.placeholder.com/150",
              name: "Jane Smith",
              position: "Head Chef",
            },
            {
              imgSrc: "https://via.placeholder.com/150",
              name: "Michael Brown",
              position: "Operations Manager",
            },
          ].map((member, index) => (
            <div
              key={index}
              style={styles.teamCard}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={member.imgSrc} alt={member.name} style={styles.teamCardImage} />
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
