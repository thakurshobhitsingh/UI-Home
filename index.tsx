import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const categories = [
    {
      id: 1,
      name: "Apartments",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
      id: 2,
      name: "Villas",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 3,
      name: "Luxury",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    },
    {
      id: 4,
      name: "Beach House",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
  ];

  const houses = [
    {
      id: 1,
      name: "Modern Apartment",
      location: "New York, USA",
      price: "$250/night",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
    {
      id: 2,
      name: "Luxury Villa",
      location: "Los Angeles, USA",
      price: "$550/night",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 3,
      name: "Beach House",
      location: "Miami, USA",
      price: "$450/night",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    },
    {
      id: 4,
      name: "City Penthouse",
      location: "Chicago, USA",
      price: "$350/night",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    },
    {
      id: 5,
      name: "Country Cottage",
      location: "Texas, USA",
      price: "$200/night",
      image: "https://www.shutterstock.com/image-photo/spokane-washington-usa-november-22-600nw-2138814843.jpg",
    },
    {
      id: 6,
      name: "Elegant Mansion",
      location: "California, USA",
      price: "$900/night",
      image: "https://i.ytimg.com/vi/_EJpjC_08kU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAklutNaHlM7IR3dbNp_V2AujjC-w",
    },
    {
      id: 7,
      name: "Rustic Cabin",
      location: "Colorado, USA",
      price: "$180/night",
      image: "https://onekindesign.com/wp-content/uploads/2018/11/Rustic-Mountain-Cabin-Walton-Architecture-01-1-Kindesign.jpg",
    },
    {
      id: 8,
      name: "Skyline Condo",
      location: "Seattle, USA",
      price: "$300/night",
      image: "https://hips.hearstapps.com/hmg-prod/images/ver090122decskyscrapers-lo3-smaller-1659645405.jpg",
    },
    {
      id: 9,
      name: "Ocean View Villa",
      location: "Hawaii, USA",
      price: "$700/night",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/444725757.jpg?k=2a388a66ddbef10811ab9fdf9c69eabe22be8af74b080e29b7d8e37db2c4655f&o=&hp=1",
    },
    {
      id: 10,
      name: "Modern Loft",
      location: "San Francisco, USA",
      price: "$400/night",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-zSgA6Fz1tI7spbsM0xxolySTLhEMjJVVQ&s",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <Text style={styles.appName}>Kuldeep Homes</Text>
        <TextInput placeholder="Search houses..." style={styles.searchBar} />
      </View>

      
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((cat) => (
          <View key={cat.id} style={styles.categoryCard}>
            <Image source={{ uri: cat.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>

     
      <Text style={styles.sectionTitle}>Featured Houses</Text>
      <View style={styles.houseList}>
        {houses.map((house) => (
          <View key={house.id} style={styles.houseCard}>
            <Image source={{ uri: house.image }} style={styles.houseImage} />
            <Text style={styles.houseName}>{house.name}</Text>
            <Text style={styles.houseLocation}>{house.location}</Text>
            <Text style={styles.housePrice}>{house.price}</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { marginBottom: 20 },
  appName: { fontSize: 26, fontWeight: "bold", color: "#333", marginBottom: 8 },
  searchBar: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginVertical: 12 },
  categoryScroll: { marginBottom: 16 },
  categoryCard: { marginRight: 14, alignItems: "center" },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#eee",
  },
  categoryText: { fontSize: 14, fontWeight: "600", marginTop: 5 },
  houseList: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  houseCard: {
    width: "48%",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 16,
    padding: 10,
    alignItems: "center",
    elevation: 3,
  },
  houseImage: { width: "100%", height: 120, borderRadius: 8, marginBottom: 8 },
  houseName: { fontSize: 16, fontWeight: "bold", textAlign: "center" },
  houseLocation: { fontSize: 14, color: "#666" },
  housePrice: { fontSize: 14, color: "#333", marginBottom: 8 },
  bookButton: { backgroundColor: "#007bff", padding: 8, borderRadius: 6, width: "100%" },
  bookText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
