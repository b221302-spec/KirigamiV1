"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Globe, Shield, Bell, Save } from "lucide-react"

export function SettingsManagement() {
  const [profileData, setProfileData] = useState({
    name: "Sarah Kim",
    email: "sarah@kirigamiarts.com",
    bio: "Passionate paper artist and founder of Kirigami Arts. Teaching the beauty of paper folding for over 10 years.",
    avatar: "/asian-woman-artist-headshot.png",
  })

  const [siteSettings, setSiteSettings] = useState({
    siteName: "Kirigami Arts",
    tagline: "Where Paper Comes to Life",
    description: "Discover the art of paper folding through workshops, custom installations, and handcrafted pieces.",
    contactEmail: "hello@kirigamiarts.com",
    phone: "+1 (555) 123-4567",
    address: "123 Art Street, Creative District, CA 90210",
    socialMedia: {
      instagram: "@kirigamiarts",
      facebook: "KirigamiArtsStudio",
      pinterest: "kirigamiarts",
      youtube: "KirigamiArtsChannel",
    },
    footerText: "© 2024 Kirigami Arts. All rights reserved.",
  })

  const [notifications, setNotifications] = useState({
    newInquiries: true,
    workshopBookings: true,
    productOrders: true,
    blogComments: false,
    systemUpdates: true,
    marketingEmails: false,
  })

  const handleSaveProfile = () => {
    console.log("Saving profile:", profileData)
  }

  const handleSaveSiteSettings = () => {
    console.log("Saving site settings:", siteSettings)
  }

  const handleSaveNotifications = () => {
    console.log("Saving notifications:", notifications)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your profile, site configuration, and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="site" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Site Settings
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileData.avatar || "/placeholder.svg"} alt={profileData.name} />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    Change Avatar
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={3}
                  placeholder="Tell visitors about yourself and your artistic journey"
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveProfile} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="site">
          <Card>
            <CardHeader>
              <CardTitle>Site Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={siteSettings.siteName}
                    onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={siteSettings.tagline}
                    onChange={(e) => setSiteSettings({ ...siteSettings, tagline: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Site Description</Label>
                <Textarea
                  id="description"
                  value={siteSettings.description}
                  onChange={(e) => setSiteSettings({ ...siteSettings, description: e.target.value })}
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactEmail">Contact Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={siteSettings.contactEmail}
                    onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={siteSettings.phone}
                    onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Business Address</Label>
                <Input
                  id="address"
                  value={siteSettings.address}
                  onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                />
              </div>

              <div>
                <Label className="text-base font-medium">Social Media Links</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      value={siteSettings.socialMedia.instagram}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, instagram: e.target.value },
                        })
                      }
                      placeholder="@username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      value={siteSettings.socialMedia.facebook}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, facebook: e.target.value },
                        })
                      }
                      placeholder="Page name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pinterest">Pinterest</Label>
                    <Input
                      id="pinterest"
                      value={siteSettings.socialMedia.pinterest}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, pinterest: e.target.value },
                        })
                      }
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="youtube">YouTube</Label>
                    <Input
                      id="youtube"
                      value={siteSettings.socialMedia.youtube}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, youtube: e.target.value },
                        })
                      }
                      placeholder="Channel name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="footerText">Footer Text</Label>
                <Input
                  id="footerText"
                  value={siteSettings.footerText}
                  onChange={(e) => setSiteSettings({ ...siteSettings, footerText: e.target.value })}
                />
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveSiteSettings} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="newInquiries">New Inquiries</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new custom installation requests arrive
                    </p>
                  </div>
                  <Switch
                    id="newInquiries"
                    checked={notifications.newInquiries}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newInquiries: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="workshopBookings">Workshop Bookings</Label>
                    <p className="text-sm text-muted-foreground">Receive alerts for new workshop registrations</p>
                  </div>
                  <Switch
                    id="workshopBookings"
                    checked={notifications.workshopBookings}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, workshopBookings: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="productOrders">Product Orders</Label>
                    <p className="text-sm text-muted-foreground">Get notified about new product purchases</p>
                  </div>
                  <Switch
                    id="productOrders"
                    checked={notifications.productOrders}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, productOrders: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="blogComments">Blog Comments</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications for new blog post comments</p>
                  </div>
                  <Switch
                    id="blogComments"
                    checked={notifications.blogComments}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, blogComments: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="systemUpdates">System Updates</Label>
                    <p className="text-sm text-muted-foreground">Important updates about the admin system</p>
                  </div>
                  <Switch
                    id="systemUpdates"
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, systemUpdates: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketingEmails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Promotional content and feature announcements</p>
                  </div>
                  <Switch
                    id="marketingEmails"
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, marketingEmails: checked })}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveNotifications} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">Change Password</Label>
                <div className="space-y-4 mt-2">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Two-Factor Authentication</Label>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Active Sessions</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">Chrome on macOS • San Francisco, CA</p>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
