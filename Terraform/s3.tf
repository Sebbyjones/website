provider "aws" {
  region = "us-east-1"
}

data "aws_s3_bucket" "personal_site" {
  bucket = "sebastian-latempa-personal-site"
}

resource "aws_s3_bucket_website_configuration" "personal_site_config" {
  bucket = data.aws_s3_bucket.personal_site.id
  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = data.aws_s3_bucket.personal_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = data.aws_s3_bucket.personal_site.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${data.aws_s3_bucket.personal_site.arn}/*"
      }
    ]
  })
}