
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { toast } from "@/components/ui/sonner";
import { Chef, ShoppingBag, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const handleSubscribeClick = () => {
    toast.success("Thank you for subscribing!", {
      description: "We'll keep you updated with our latest offerings.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Homemade Food <br />
                <span className="text-orange-600">Delivered Fresh</span> <br />
                To Your Door
              </h1>
              <p className="text-xl text-gray-700 max-w-lg">
                Enjoy delicious, home-cooked meals prepared by local chefs and delivered straight to your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  View Menu
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Delicious homemade meal"
                className="rounded-xl shadow-xl max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                  <span className="font-medium">Available Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="text-gray-600 mt-2">Simple steps to get homemade goodness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingBag className="h-8 w-8 text-orange-600" />,
                title: "Choose Your Meals",
                description: "Browse our weekly menu of homemade dishes prepared by local chefs.",
              },
              {
                icon: <Clock className="h-8 w-8 text-orange-600" />,
                title: "Schedule Delivery",
                description: "Select your preferred delivery time and we'll bring it to your doorstep.",
              },
              {
                icon: <Heart className="h-8 w-8 text-orange-600" />,
                title: "Enjoy Fresh Food",
                description: "Heat, eat and enjoy restaurant-quality meals in the comfort of your home.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Meals</h2>
            <p className="text-gray-600 mt-2">This week's most popular homemade dishes</p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Homemade Lasagna",
                  chef: "Chef Maria",
                  price: "$12.99",
                  image: "https://images.unsplash.com/photo-1501186758051-eeb48003b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Chicken Pot Pie",
                  chef: "Chef Robert",
                  price: "$10.99",
                  image: "https://images.unsplash.com/photo-1534738892154-e0af66779b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                },
                {
                  name: "Vegetable Curry",
                  chef: "Chef Priya",
                  price: "$11.99",
                  image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                },
              ].map((meal, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="aspect-square relative">
                        <img
                          src={meal.image}
                          alt={meal.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-medium">{meal.name}</h3>
                          <span className="font-bold text-orange-600">{meal.price}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Chef className="h-4 w-4 mr-2" />
                          <span>{meal.chef}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="text-center mt-8">
            <Button className="bg-orange-600 hover:bg-orange-700">View Full Menu</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600 mt-2">Real reviews from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The food is just like my grandmother used to make. Fresh, flavorful, and delivered right on time!",
                name: "Sarah Johnson",
                location: "New York, NY",
              },
              {
                quote: "As a busy parent, this service has been a lifesaver. Delicious homemade meals without the prep work.",
                name: "Michael Chen",
                location: "Chicago, IL",
              },
              {
                quote: "The variety and quality of meals is outstanding. I love supporting local chefs while enjoying great food.",
                name: "Emma Rodriguez",
                location: "Austin, TX",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-lg italic text-gray-700 flex-grow">
                      "{testimonial.quote}"
                    </div>
                    <div className="mt-6">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-orange-600 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="mt-2">Get weekly menu updates and special offers</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none md:min-w-[300px]"
              />
              <Button 
                className="rounded-l-none bg-gray-900 hover:bg-gray-800" 
                onClick={handleSubscribeClick}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">HomeMade</h3>
              <p className="mb-4">Bringing the best local homemade food straight to your door, freshly made with love.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Menu</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>contact@homemadefood.com</li>
                <li>(555) 123-4567</li>
                <li>123 Main Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} HomeMade Food Delivery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
