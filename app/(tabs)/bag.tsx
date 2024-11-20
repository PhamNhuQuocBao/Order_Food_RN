import { View, Text, ScrollView, Alert, ActivityIndicator } from "react-native";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styleBag } from "@/stylesheets/bag";
import StackBag from "@/components/StackBag";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCart } from "@/services/cart";

const DELIVERY_COST = 10;

const Bag = () => {
  const [menus, setMenus] = useState<{ userId: string; products: [] }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [subTotal, setSubTotal] = useState<number>(0);

  const calculateTotalPrice = useCallback((cart: any) => {
    return cart.products.reduce(
      (total: number, product: any) => total + product.totalPrice,
      0
    );
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const userData = await AsyncStorage.getItem("user");
      if (!userData) {
        setIsLoading(false);
        return;
      }

      const res = await getCart(JSON.parse(userData)._id);
      if (res?.status === 200) {
        setMenus(res.data);
        setIsLoading(false);
        if (!res.data) return;
        setSubTotal(() => {
          return calculateTotalPrice(res.data);
        });
        return;
      }

      if (res?.status === 400) {
        Alert.alert("Error", "Something went wrong!");
        setIsLoading(false);
        return;
      }
    };
    fetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <View>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <SafeAreaView style={styleBag.container}>
          <Text style={styleBag.headerTitle}>My bag</Text>
          {menus && menus.products.length > 0 && (
            <ScrollView>
              <View>
                {menus.products.map((item: any) => (
                  <View key={item.menuItem._id}>
                    <StackBag
                      data={item.menuItem}
                      quantity={item.quantity}
                      totalPrice={item.totalPrice}
                      key={item.menuItem._id}
                    />
                    <Text style={{ color: Colors.primary.color }}>
                      --------------------------------------------------------
                    </Text>
                  </View>
                ))}
              </View>
              <View
                style={{
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Subtotal</Text>
                  <Text
                    style={{ fontWeight: "bold", color: Colors.primary.color }}
                  >
                    {subTotal}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Delivery</Text>
                  <Text
                    style={{ fontWeight: "bold", color: Colors.primary.color }}
                  >
                    {subTotal * (10 / 100)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Delivery</Text>
                  <Text
                    style={{ fontWeight: "bold", color: Colors.primary.color }}
                  >
                    {subTotal + subTotal * (10 / 100)}
                  </Text>
                </View>
              </View>
            </ScrollView>
          )}

          <Button title="Checkout" />
        </SafeAreaView>
      )}
    </>
  );
};

export default Bag;
