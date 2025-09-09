import { type Product, type InsertProduct, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.products = new Map();
    this.contacts = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "Elite Runner Pro",
        price: "485000",
        category: "shoes",
        imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Premium running shoes with advanced cushioning technology"
      },
      {
        id: "2",
        name: "Meridian Track Set",
        price: "320000",
        category: "apparel",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Luxury athletic wear designed for peak performance"
      },
      {
        id: "3",
        name: "Performance Pack",
        price: "150000",
        category: "accessories",
        imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Essential accessories for the dedicated runner"
      },
      {
        id: "4",
        name: "Velocity Series",
        price: "275000",
        category: "apparel",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Technical running apparel for serious athletes"
      },
      {
        id: "5",
        name: "Grace Collection",
        price: "395000",
        category: "shoes",
        imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Women's luxury running collection"
      },
      {
        id: "6",
        name: "Technical Elite",
        price: "420000",
        category: "apparel",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        description: "Premium technical running apparel"
      }
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
