terraform {
  backend "s3" {
    bucket         = "sebby-terraform-state"
    key            = "personal-site/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}